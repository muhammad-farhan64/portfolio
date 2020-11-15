import Particles from 'react-particles-js'

const particle = () => {
  return (
    <Particles
      height='100vh'
      style={{ background: 'black' }}
      params={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.3,
          },
          move: {
            direction: 'right',
            speed: 0.5,
            outMode: 'out',
          },
          size: {
            value: 2,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  )
}

export default particle
