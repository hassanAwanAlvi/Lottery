import { useState, useEffect } from "react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import initalData from "../../data/quiniela.json"

export default () => {
  const [socketUrl, setSocketUrl] = useState("wss://api.quinielashoy.com/ws") //Public API that will echo messages sent to it back to the client
  const [messageHistory, setMessageHistory] = useState([])
  const [sendMessage, lastMessage, readyState, getWebSocket] = useWebSocket(
    socketUrl
  )

  useEffect(() => {
    if (lastMessage !== null) {
      const currentWebsocketUrl = getWebSocket().url

      setMessageHistory(prev => prev.concat(lastMessage))
    }
  }, [lastMessage])

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
  }[readyState]

  const data = lastMessage ? JSON.parse(lastMessage.data) : initalData

  return {
    data,
  }
}
