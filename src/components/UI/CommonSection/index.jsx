import { Container } from 'reactstrap'

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <h2>{title}</h2>
      </Container>
    </section>
  )
}

export default CommonSection
