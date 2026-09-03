import LayoutMain from '../../layout/LayoutMain.jsx'
import Carousel from '../../components/carousel/Carousel.jsx'
import ProjectsServices from '../../components/projects-services/ProjectsServices.jsx'
import { featuredBooks } from '../../services/featuredBooks.js'

const welcomeSlide = {
  id: 0,
  image: 'https://placehold.co/1600x800?text=Booker',
  title: 'Bienvenido a Booker',
}

const slides = [welcomeSlide, ...featuredBooks]

export function Home() {
  return (
    <LayoutMain>
      <Carousel items={slides} />
      <ProjectsServices />
    </LayoutMain>
  )
}

export default Home
