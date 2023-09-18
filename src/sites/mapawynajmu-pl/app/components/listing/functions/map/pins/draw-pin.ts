import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/change-url'

interface DrawPinProps {
  latitude: number
  longitude: number
  id: number
  htmlContent: string
  className: string
  path: string
  setControl(props: object): void
  setData(props: object): void
  isMobile: boolean
}

function drawPin(props: DrawPinProps) {
  const { latitude, longitude, id, htmlContent, className, path, setControl } = props

  // @ts-ignore
  return new window.pinCreator(
    {
      latitude,
      longitude,
    },
    {
      pinId: `${id}`,
      htmlContent,
      className,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        setControl({ currentTileId: id })
        changeUrl({ href: path, retainQueryParams: true, withScroll: false })
      },
    }
  )
}

export default drawPin
