import './App.css';
import Image from './components/Image';
import imageOne from './assets/component-01/image-01.jpg';
import imageOne2x from './assets/component-01/image-01@2x.jpg';

function App() {
  // mock cms data
  const block1 = {
    title: "Answer your body's needs",
    copy: "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs",
    subtitle: "Be mindful",
    subtitleCopy: "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating" 
  };

  return (
    <main className="container">
      <section className="container-body">
        <Image 
          src={imageOne}
          srcDesktop={imageOne2x}
          alt="father and son walking"
          width={380}
          height={600}
        />
        <div className="split-section">
          <Image 
            alt="father and son walking"
            src={imageOne}
            srcDesktop={imageOne2x}
            width={380}
          height={290}
          />
          <Image 
            src={imageOne}
            srcDesktop={imageOne2x}
            alt="father and son walking"
            width={380}
            height={290}
          />
        </div>
        <article>
          <h2>{block1.title}</h2>
          <p>{block1.copy}</p>
          <h3>{block1.subtitle}</h3>
          <p>{block1.subtitleCopy}</p>
        </article>
      </section>
    </main>

  )
}

export default App
