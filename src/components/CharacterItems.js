import './style.css';

export const CharacterItems = ({data}) => {
  return (
  <>
    {(data) ? (
      data.map(item => {
        return(
          <div className='card'>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            <div className='title'>
              <h1>{item.name}</h1>
            </div>
          </div>
        )
      })
    ):""}
  </>
  )
}