import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Hola from '../imagenes/codigo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import './sobreMi.css'
import casa from '../imagenes/proyectoCasas.png'
import casa1 from '../imagenes/usuariosCasa.png'
import casa2 from '../imagenes/administracionCasas.png'
import casa3 from '../imagenes/InformacionGeneral.png'

const SobreMi = () =>{


    const navigate = useNavigate();

    return(
        <>
        <Grid container spacing={1} className="contenedor">
                <Grid item xs={4}>
                    <Button onClick={()=>navigate('/')} id="botonHome">Home</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>navigate('/contacto')} id="botonContacto">Contacto</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>navigate('/solicitudes')} id="botonSolicitudes">Solicitudes</Button>
                </Grid>
        </Grid>

        <Grid container spacing={1} className="titulo">
            <Grid item xs={6}>
            <Typography variant="h3">
                 Proyectos
            </Typography>
            </Grid>
        </Grid>
        
        
        <Grid container spacing={2}  mb={'40px'}>
      <Grid item xs={2}/>
      <Grid item xs={3} mr={'100px'}>
          <img src={casa}  width={500} height={400}/>
      </Grid>
      <Grid item xs={3} ml={'50px'}>
        <img src={casa1}  width={500} height={400}/>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
     <Grid item xs={2}/>
      <Grid item xs={3} mr={'100px'}>
        <img src={casa2}  width={500} height={400}/>
      </Grid>
      <Grid item xs={3} ml={'50px'}>
        <img src={casa3}  width={500} height={400}/>
      </Grid>
    </Grid>


        <Grid container spacing={4} style={{backgroundColor:'hsla(300, 2%, 9%, 0.937)', marginTop:'100px', paddingBottom:'30px' }} >
            <Typography variant="h3" style={{width:'100%', color:'white', textAlign:'center', paddingBottom:'40px'}}>
                Redes Sociales
            </Typography>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
                <Button className="iconoRedes">
                    <a href="https://web.facebook.com/profile.php?id=100009814955952" target="_blank" rel="noreferrer"  style={{color:"white"}}> 
                    <FacebookIcon style={{fontSize:'60px', width:'60px', height:'60px'}}/>
                    </a>
                </Button>
                    <Typography style={{color:'white', marginLeft:'10px'}}>
                        Facebook
                    </Typography>
            </Grid>
            <Grid item xs={2} >
                <Button className="iconoRedes">
                    <a href="https://www.instagram.com/wmcs99/" target="_blank" rel="noreferrer" style={{color:"white"}}> 
                    <InstagramIcon style={{fontSize:'60px', width:'60px', height:'60px'}}/>
                    </a>
                </Button>
                    <Typography style={{color:'white', marginLeft:'10px'}}>
                        Instagram
                    </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button className="iconoRedes">
                    <a href="https://www.linkedin.com/in/wilson-danilo-celis-sanchez-83078325a/" target="_blank" rel="noreferrer" style={{color:"white"}}> 
                    <LinkedInIcon style={{fontSize:'60px', width:'60px', height:'60px'}}/>
                    </a>
                </Button>
                    <Typography style={{color:'white', marginLeft:'10px'}}>
                        Linkdin
                    </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button className="iconoRedes">
                    <a href="https://github.com/Danilocelis21" target="_blank" rel="noreferrer" style={{color:"white"}}> 
                    <GitHubIcon style={{fontSize:'60px', width:'60px', height:'60px'}}/>
                    </a>
                </Button>
                    <Typography style={{color:'white', marginLeft:'10px'}}>
                        Github
                    </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    </>
    )
}


export default SobreMi;