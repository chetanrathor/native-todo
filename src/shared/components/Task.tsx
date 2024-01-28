import { Box, Grid, Typography } from '@mui/material'
import { ConstantStrings } from 'constants/strings/strings'
import moment from 'moment'
import React from 'react'
interface Properties {
    title: string,
    priority: 'High Priority' | 'Low',
    isStarted: boolean,
    deteToBeFinish: Date,
    color: string
}
const typography = {
    title: {
        color: "#111",
        fontFamily: "DM Sans",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
    },
    date: {
        color: "#222",
        fontFamily: "DM Sans",
        fontSize: "11px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
    },
    priority: {
        color: "#FF7F00",
        fontFamily: "DM Sans",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
    },
    isStarted: {
        color: "#FF7F00",
        fontFamily: "DM Sans",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
    },
}

const Task = ({ color, title, deteToBeFinish, priority, isStarted }: Properties) => {
    console.log('first', { color, title, deteToBeFinish, priority, isStarted })
    return (
        <Grid container item direction={'column'} bgcolor={color}  paddingX={'12px'} paddingY={'14px'} rowGap={'10px'} width={'48%'}>
            <Grid item>
                <input type="radio" />
            </Grid>
            <Grid item>
                <Typography style={typography.title}>
                    {title}
                </Typography>
            </Grid>
            <Grid item container>
                <Grid item>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M4.2 0V1.2H7.8V0H9V1.2H11.4C11.5591 1.2 11.7117 1.26321 11.8243 1.37574C11.9368 1.48826 12 1.64087 12 1.8V11.4C12 11.5591 11.9368 11.7117 11.8243 11.8243C11.7117 11.9368 11.5591 12 11.4 12H0.6C0.44087 12 0.288258 11.9368 0.175736 11.8243C0.0632141 11.7117 0 11.5591 0 11.4V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3V0H4.2ZM10.8 4.2H1.2V10.8H10.8V4.2ZM7.8216 5.4816L8.67 6.33L5.7 9.3L3.5784 7.1784L4.428 6.33L5.7006 7.6032L7.8222 5.4816H7.8216Z" fill="#222222" />
                    </svg>
                </Grid>

            </Grid>
            <Grid item>
                <Typography style={typography.date}>
                    {moment(deteToBeFinish).format('DD/MM/YY')}
                </Typography>
            </Grid>
            <Grid item>
                <Box padding={'3px 8px'} bgcolor={'#FFEDF1'} width={'fit-content'}>
                    <Typography style={typography.priority}>
                        {priority}
                    </Typography>
                </Box>
            </Grid>
            {!isStarted && <Grid item>
                <Box padding={'3px 8px'}>
                    <Typography style={typography.isStarted}>
                        {ConstantStrings.NotStarted}
                    </Typography>
                </Box>
            </Grid>}
        </Grid>
    )
}

export default Task