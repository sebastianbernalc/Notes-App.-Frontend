

const EmptyCard = ({imgSrc,message}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
        <img src={imgSrc} alt="No Note" className="w-40 h-40 mx-auto" />
        <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5">{message}</p>
    </div>
  )
}

export default EmptyCard