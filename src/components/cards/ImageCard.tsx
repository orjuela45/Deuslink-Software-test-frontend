export const ImageCard = ({src = '/taskIcon.png'}: {src:string|undefined}) => {
  if (src == '') src = '/taskIcon.png'
  return (
    <div className="bg-primary rounded-personal p-2 text-center">
      <img src={src} alt="" height={"35px"} width={"35px"} />
    </div>
  )
}
