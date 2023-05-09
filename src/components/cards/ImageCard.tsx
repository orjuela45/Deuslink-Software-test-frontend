export const ImageCard = ({src}: {src:string}) => {
  if (src == '') src = '/taskIcon.png'
  return (
    <div className="bg-primary rounded-personal p-2 text-center">
      <img src={src} alt="" height={"35px"} width={"35px"} />
    </div>
  )
}
