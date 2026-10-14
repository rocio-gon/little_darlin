function GiftCard(props) {
  return (
    <article className="gift-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>${props.price}</p>

      <a
        href={props.productUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View at {props.store}
      </a>
    </article>
  )
}

export default GiftCard