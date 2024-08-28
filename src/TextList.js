const TextList = (props) => {
    
    const items = props.gifs.map(gif => (
        <div key={gif.id} style={{ margin: '10px' }}>
            <img src={gif.url}  />
            <img src={gif.images.fixed_height.url} alt={gif.title} style={{ maxWidth: '200px', height: 'auto' }} />
        </div>
    ))
    return (
        <div className="text-container" >
            {items}
        </div>
    )
}

export default TextList