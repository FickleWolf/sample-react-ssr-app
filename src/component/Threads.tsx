import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Threads = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL
  const navigate = useNavigate()
  const [threads, setThreads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [alertText, setAlertText] = useState('')

  useEffect(() => {
    getThreads(undefined)
  }, [])

  async function getThreads(offset: number | undefined) {
    setAlertText('')
    let url = `${baseUrl}/threads`
    if (offset !== undefined) url += `?offset=${offset}`
    try {
      const response = await fetch(url)
      await response.json().then((data) => {
        const status = response.status
        if (status !== 200) {
          alert(`スレッドの取得に失敗しました。\nstuas:${status}`)
          switch (status) {
            case 400:
              setAlertText(
                'スレッドの取得に失敗しました。\nバリデーションエラー'
              )
              break
            case 500:
              setAlertText(
                'スレッドの取得に失敗しました。\nサーバーでエラーが発生しました。'
              )
              break
            default:
              setAlertText(
                `スレッドの取得に失敗しました。\n不明なエラー statusCode:${status}`
              )
              break
          }
          setLoading(false)
          return
        }
        setShowMore(data.length === 10)
        setThreads((prefState) => [...prefState, ...data])
        setLoading(false)
      })
    } catch (error) {
      alert(`スレッドの取得に失敗しました。\n${error}`)
      setAlertText(`スレッドの取得に失敗しました。\n${error}`)
      setLoading(false)
      return
    }
  }

  return (
    <div className="wrapper">
      <h2>新着スレッド</h2>
      <div className="threads">
        {loading ? (
          <div className="wrapper-loader">
            <div className="loader" />
          </div>
        ) : (
          <>
            {threads.map((thread) => (
              <div
                className="thread"
                key={thread.id}
                onClick={() => {
                  navigate(`/thread/${thread.id}`, {
                    state: { threadTittle: thread.title },
                  })
                }}
              >
                <p className="thread-id-text">{`ID:${thread.id}`}</p>
                <span>{thread.title}</span>
              </div>
            ))}
            {showMore ? (
              <button
                className="more"
                onClick={() => {
                  const threadLength = threads.length
                  getThreads(threadLength)
                }}
              >
                もっと表示する
              </button>
            ) : null}
            <p className="alert-text">{alertText}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Threads
