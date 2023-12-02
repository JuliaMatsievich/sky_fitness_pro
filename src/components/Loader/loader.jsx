import { ColorRing } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <>
      <div className="loader">
        <ColorRing
          visible={true}
          height="160"
          width="160"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#ad61ff', '#6269eb', '#ffb53d', '#e1ff8f', '#6ee4fe']}
        />
      </div>
    </>
  )
}
