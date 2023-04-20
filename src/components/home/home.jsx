import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FotoDanilo   from '../imagenes/imgDanilo.jpeg'
import './home.css'
import { Link, useNavigate } from 'react-router-dom';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import ReactIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import HtmlIcon from '@mui/icons-material/HtmlOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () =>{

    const navigate = useNavigate();

    return(
        <>
        <div>
            <Grid container spacing={1} className="contenedor">
                    
                    <Grid item xs={4}>
                        <Button onClick={()=>navigate('/sobreMi')} id="botonSobreMi">Sobre mi</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={()=>navigate('/contacto')} id="botonContacto">Contacto</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={()=>navigate('/solicitudes')} id="botonSolicitudes">Solicitudes</Button>
                    </Grid>
            </Grid>

            <Grid container spacing={2} mt="5rem" ml="180px" mb="80px">
                <Grid >
                    <img className="fotoDanilo" src={FotoDanilo}/>
                </Grid>
                <Grid className="nombreDanilo" >
                    <Typography variant="h3" gutterBottom ml="">
                        HOLA SOY DANILO CELIS
                    </Typography>
                    <Typography variant="h4" gutterBottom ml="30px">
                        ReactJs Fronted Developer
                    </Typography>
                    <Typography variant="body1" gutterBottom>

                    </Typography>
                </Grid>
            </Grid>
            

        <Grid container spacing={4} className="container2" width="1200px" marginLeft="160px" >
            <Typography variant="h3" style={{width:"100%", paddingBottom:"60px"}}>
                Lenguajes
            </Typography>
            <Grid item xs={3}>
                <Button className="icono" >
                        <HtmlIcon color="error" className="html" style={{fontSize:'60px', width:'80px', height:'80px',paddingBottom:'50px'}}/>
                </Button>
                <Typography variant="h6">
                    HTML
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Button className="icono">
                        <CssIcon style={{fontSize:'80px', width:'80px', height:'110px',paddingBottom:'50px'}}/>
                </Button>
                <Typography variant="h6">
                    CSS
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Button className="icono" color="warning">
                        <JavascriptIcon style={{fontSize:'80px', width:'80px', height:'110px', paddingBottom:'50px'}} />
                </Button>
                <Typography variant="h6">
                    Javascript
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Button className="icono">
                        <ReactIcon style={{fontSize:'80px', width:'80px', height:'60', paddingBottom:'50px'}}/>
                </Button>
                <Typography variant="h6">
                    React
                </Typography>
            </Grid>
            
        </Grid>

        <Grid container spacing={4} className="container3"  >
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
        </div>
    </>
    )
}


export default Home;