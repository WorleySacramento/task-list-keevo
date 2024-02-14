import { CheckBox } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import TodoIcon from '../image/icons';
import './home.css'
import 'animate.css'

const Home = () => {
  return (
    <div className='homeContainer'>
          <div className='textHome'>
            <h1 className='animate__animated animate__backInLeft animate__delay-1s'>Tarefas</h1>
          </div>
      <div className='homeContent animate__animated animate__heartBeat animate__delay-5s'>

        <div style={{ display: 'flex', alignItems: 'center', }}>

          <div style={{ position:'absolute', bottom:180, left:8}}>

            <div style={{ display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex',}}>
              <CheckBox className='animate__animated animate__bounceInDown animate__delay-2s ' />
              <span className='animate__animated animate__bounceInDown animate__delay-2s ' >Tarefa 1</span>
              </div>
              <div style={{ display:'flex',}}>
              <CheckBox className='animate__animated animate__bounceInDown animate__delay-3s ' />
              <span className='animate__animated animate__bounceInDown animate__delay-3s ' >Tarefa 1</span>
              </div>
              <div style={{ display:'flex',}}>
              <CheckBox className='animate__animated animate__bounceInDown animate__delay-4s ' />
              <span className='animate__animated animate__bounceInDown animate__delay-4s ' >Tarefa 1</span>
              </div>
            </div>

          </div>
        </div>

        <div className='buttonHome' onClick={() => window.location.href = '/tasks'}>
          <IconButton className='animate__animated animate__pulse animate__delay-1s animate__infinite'
          title='clique' style={{ padding: 5 }} >
            <TodoIcon />
          </IconButton>
          <span>Entrar</span>
        </div>
      </div>
    </div>

  );
}
export default Home;