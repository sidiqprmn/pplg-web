interface IBubbleChat {
  text?: string
  resultRegistText?: string
}

const time = new Date()

const BubbleChat = {
  BubbleChatAdmin: (props: IBubbleChat) => {
    const { text } = props
    return (
      <div className="flex items-start gap-3">
        <img
          className="w-[40px] h-[40px]"
          src="./static/images/icons/alexander2.svg"
          alt=""
          srcSet=""
        />
        <div className="bg-[#204D84] w-auto h-auto mr-20 pt-3 px-3 my-[6px] text-white rounded-e-[10px] rounded-bl-[10px]">
          <p className="whitespace-pre-line text-[12px]">{text}</p>
          <p className="text-[#5F8DC5] text-[9px] -mt-2">{`${time.getDate()}/${time.getMonth()}/${time.getFullYear()} - ${time.getHours()}:${time.getMinutes()}`}</p>
        </div>
      </div>
    )
  },
  BubbleChatUser: (props: IBubbleChat) => {
    const { text, resultRegistText } = props
    return (
      <div className="flex justify-end">
        <div className="bg-[#F1F7FF] w-auto h-auto ml-20 pt-[12px] pb-1 px-[16px] text-[#6F699B] my-[6px] rounded-s-[10px] rounded-br-[10px]">
          <p className="whitespace-pre-line text-[12px] leading-[21px] font-[400]">
            {text}
          </p>
          <p className="text-[9px] -mt-2">{`${time.getDate()}/${time.getMonth()}/${time.getFullYear()} - ${time.getHours()}:${time.getMinutes()}`}</p>
        </div>
      </div>
    )
  },
}

export default BubbleChat
