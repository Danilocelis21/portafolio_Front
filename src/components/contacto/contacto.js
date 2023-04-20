import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './contacto.css'
import { Link, useNavigate } from 'react-router-dom';
import JavascriptIcon from '@mui/icons-material/Javascript';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import React, {useEffect, useState} from 'react';
import Alert from '@mui/material/Alert';
import axios from 'axios';



const Contacto = () =>{

    const [show, setShow] = useState(true)
    const [saveButton, setSaveButton] = useState(true)
    const [showAlert, setAlert] = useState(false)
    const [showAlertError, setAlertError] = useState(false)
    const [showAlertNombre, setAlertNombre] = useState(false)
    const [showAlertCorreo, setAlertCorreo] = useState(false)
    const [showAlertCelular, setAlertCelular] = useState(false)
    const [showAlertTiposolicitud, setAlertTiposolicitud] = useState(false)
    const [showAlertComentario, setAlertComentario] = useState(false)
    const [data, setData] = useState([])
    const [idsolicitud, setIdsolicitud] = useState(0)
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [celular, setCelular] = useState("")
    const [tipoSolicitud, setTiposolicitud] = useState("")
    const [comentario, setComentario] = useState("")
    
    const onNombreChange = event => setNombre(event.target.value)
    const onCorreoChange = event => setCorreo(event.target.value)
    const onCelularChange = event => setCelular(event.target.value)
    const onTiposolicitudChange = event => setTiposolicitud(event.target.value)
    const onComentarioChange = event => setComentario(event.target.value)

    const getData = async () => {
        try {
          const {data: response} = await axios.get('http://localhost:3001/solicitud')
          setData(response)
        } catch (error) {
          console.log(error.message)
        }
      }
      const update = () => {
        if (nombre === ""){
          setAlertError(true)
          setAlertNombre(true)
          return
        } 
        if (correo === ""){
          setAlertError(true)
          setAlertCorreo(true)
          return
        } 
        if (celular === ""){
          setAlertError(true)
          setAlertCelular(true)
          return
        }
        if(tipoSolicitud === ""){
          setAlertError(true)
          setAlertTiposolicitud(true)
        }
        if(comentario === ""){
          setAlertError(true)
          setAlertComentario(true)
        }
        else  {
            axios.put(`http://localhost:3001/actualizar/${idsolicitud}`, {
              nombre: nombre,
              correo: correo,
              celular: celular,
              tipoSolicitud: tipoSolicitud,
              comentario: comentario 
            }).then(() => {
              setNombre("")
              setCorreo("")
              setCelular("")
              setTiposolicitud("")
              setComentario("")
              setShow(true)
              setAlert(true)
              setAlertError(false)
              setAlertNombre(false)
              setAlertCorreo(false)
              setAlertCelular(false)
              setAlertTiposolicitud(false)
              setAlertComentario(false)
              getData()
            })
          }
        }
    
    const showTable = () =>{
        if (nombre === ""){
          setAlertError(true)
          setAlertNombre(true)
        } 
        if (correo === ""){
          setAlertError(true)
          setAlertCorreo(true)
        } 
        if (celular === ""){
          setAlertError(true)
          setAlertCelular(true)
        }
        if(tipoSolicitud === ""){
          setAlertError(true)
          setAlertTiposolicitud(true)
        }
        if(comentario === ""){
          setAlertError(true)
          setAlertComentario(true)
        }
        else  {
          axios.post('http://localhost:3001/agregar', {
            nombre: nombre,
            correo: correo ,
            celular: celular,
            tipoSolicitud: tipoSolicitud,
            comentario: comentario
          }).then((response) => {
            setNombre("")
            setCorreo("")
            setCelular("")
            setTiposolicitud("")
            setComentario("")
            setShow(true)
            setAlert(true)
            setAlertError(false)
            setAlertNombre(false)
            setAlertCorreo(false)
            setAlertCelular(false)
            setAlertTiposolicitud(false)
            setAlertComentario(false)
            getData()
           console.log(response)
          })
          .catch((error) => {
           console.log(error)
          })
        }
     }

     const cancel = () =>{
        if (!show){
          setNombre("")
          setCorreo("")
          setCelular("")
          setTiposolicitud("")
          setComentario("")
          setShow(true)
          setAlertError(false)
        }
      }
    
    const navigate = useNavigate();
    
    return(
        <>
        <Grid container spacing={1} className="contenedor">
                <Grid item xs={4}>
                    <Button onClick={()=>navigate('/')} id="botonHome">Home</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>navigate('/sobreMi')} id="botonSobreMi">Sobre mi</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>navigate('/solicitudes')} id="botonSolicitudes">Solicitudes</Button>
                </Grid>
        </Grid>


        <Box
            className="formulario"
            component="form"
            noValidate
            autoComplete="off"
            justifyContent="center"
          >
            <Grid container spacing={1} marginLeft="200px">
              {
                showAlertError && 
                <Grid item xs={10} sx={{mb:2,}}>
                  <Alert value={showAlertError}  severity="error">
                    Debes de llenar los campos que esten vacios. 
                  </Alert>
                </Grid>
              }
              <Grid item xs={8} >
                <TextField id="outlined-basic" 
                  label="Nombre" 
                  variant="outlined" 
                  error={showAlertNombre}
                  onChange={onNombreChange}  
                  value={nombre} />
              </Grid>
              <Grid item xs={8}>
                <TextField 
                  id="outlined-basic" 
                  label="Correo" 
                  variant="outlined" 
                  error={showAlertCorreo}
                  onChange={onCorreoChange}  
                  value={correo}
                  />
              </Grid>
              <Grid item xs={8}>
                <TextField 
                  id="outlined-basic" 
                  label="Celular" 
                  variant="outlined"
                  error={showAlertCelular}
                  onChange={onCelularChange}  
                  value={celular}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField 
                  id="outlined-basic" 
                  label="Tipo de solicitud" 
                  variant="outlined"
                  error={showAlertTiposolicitud}
                  onChange={onTiposolicitudChange}  
                  value={tipoSolicitud}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField 
                  id="outlined-basic" 
                  label="Comentario" 
                  variant="outlined"
                  error={showAlertComentario}
                  onChange={onComentarioChange}  
                  value={comentario}
                />
              </Grid>
            </Grid>
            <Grid sx={{mt:6,}} container justifyContent="center" >
              {
                saveButton &&
                  <Grid item  >
                    <Button onClick={() => {showTable()}} variant="contained" color="success">Enviar</Button>
                  </Grid>
              }
            </Grid>
          </Box>


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


export default Contacto;