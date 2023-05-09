export const ImageCard = ({src = '/taskIcon.png'}) => {
  return (
    <div className="bg-primary rounded p-2 text-center">
      <img src={src} alt="" height={"35px"} width={"35px"} />
    </div>
  )
}