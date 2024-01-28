import { Grid, TextField, Typography } from '@mui/material'
import { ConstantStrings } from 'constants/strings/strings'
import React from 'react'
import Task from 'shared/components/Task'

const typography = {
    welcomeMessage: {
        color: "#FFF",
        fontFamily: "DM Sans",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
    },
    userName: {
        color: "#FFF",
        fontFamily: "DM Sans",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal"
    },
    tasks: {
        color: "#999",
        fontFamily: "DM Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
    }
}

const Home = () => {
    return (
        <Grid container maxWidth={'420px'} direction={'column'} rowGap={3} padding={'15px'}>
            <Grid item container direction={'column'} rowGap={1}>
                <Grid item>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path d="M11 0L12.2445 9.75549L22 11L12.2445 12.2445L11 22L9.75549 12.2445L0 11L9.75549 9.75549L11 0Z" fill="#B3DFF6" />
                        <path d="M20.5 14L21.2354 19.7646L27 20.5L21.2354 21.2354L20.5 27L19.7646 21.2354L14 20.5L19.7646 19.7646L20.5 14Z" fill="#FCEDBE" />
                    </svg>
                </Grid>
                <Grid item>
                    <Typography style={typography.welcomeMessage}>{ConstantStrings.WelcomeBack} </Typography>
                </Grid>
            </Grid>
            <Grid item >
                <TextField fullWidth placeholder={ConstantStrings.Search} style={{ backgroundColor: '#F0F0F0' }}></TextField>
            </Grid>
            <Grid item container direction={'column'} rowGap={'10px'} wrap='nowrap'>
                <Grid item xs={12} >
                    <Typography style={{ ...typography.tasks, textTransform: 'uppercase' }}> {ConstantStrings.Tasks}</Typography>
                </Grid>
                <Grid item container xs={12} columnGap={'10px'} rowGap={'10px'} direction={'row'} wrap='wrap'>
                    <Task
                        color='#B3DFF6'
                        deteToBeFinish={new Date()}
                        isStarted={true}
                        priority='High Priority'
                        title='Create dummy content dynamically'
                    ></Task>
                    <Task
                        color='#B3DFF6'
                        deteToBeFinish={new Date()}
                        isStarted={true}
                        priority='High Priority'
                        title='Create dummy content dynamically'
                    ></Task>
                    <Task
                        color='#B3DFF6'
                        deteToBeFinish={new Date()}
                        isStarted={true}
                        priority='High Priority'
                        title='Create dummy content dynamically'
                    ></Task>
                    <Task
                        color='#B3DFF6'
                        deteToBeFinish={new Date()}
                        isStarted={true}
                        priority='High Priority'
                        title='Create dummy content dynamically'
                    ></Task>
                    <Task
                        color='#B3DFF6'
                        deteToBeFinish={new Date()}
                        isStarted={true}
                        priority='High Priority'
                        title='Create dummy content dynamically'
                    ></Task>
                    <Task
                        color='#B3DFF6'
                        deteToBeFinish={new Date()}
                        isStarted={true}
                        priority='High Priority'
                        title='Create dummy content dynamically'
                    ></Task>

                </Grid>
            </Grid>
            <Grid zIndex={100} item  style={{position:'fixed',top:'650px', bottom:'20%' ,left:'32%'}}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144" fill="none">
                    <g filter="url(#filter0_d_6_1888)">
                        <circle cx="68" cy="68" r="32" fill="#FF9D98" />
                        <rect x="66.6899" y="52.0002" width="2.92573" height="31.0282" rx="1.46287" fill="black" />
                        <rect x="83.0288" y="65.6152" width="2.92573" height="31.0282" rx="1.46287" transform="rotate(90 83.0288 65.6152)" fill="black" />
                    </g>
                    <defs>
                        <filter id="filter0_d_6_1888" x="0" y="0" width="144" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="20" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_1888" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_1888" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Grid>


        </Grid>
    )
}

export default Home