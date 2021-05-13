import React, { useState } from 'react';
import './AddButton.css';
import Data from "../data.json"
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    fontSize: '20px',
    position: 'relative',
    top: '35%',
  },
}));


function AddButton ({props, selectedCurrency}) {
    const classes = useStyles();
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    let finalAmount;

    // Function that calls rate without repeating
    const realRate = (rate) => {
        if(rate!==0){
            let rateConvert;
            rateConvert = 0 + rate;
            finalAmount = rateConvert;
            return rateConvert.toFixed(4);
        }  
    }

    // Function to add new currency
    const AddCurrency = (event) => {
        event.preventDefault();
        const newList = list;
        newList.push({newValue: input});
        setList([...newList]);
        setInput("");
    }

    // Handle submit button
    const handleSubmit = (e) => {
        console.log('Submitted!');
        props.onSubmit({
            text: list
        })
        setInput(null);
    };

    // Handle delete button
    const deleteCurrency = (index) => {
        var newList = list;
        newList.splice(index,1);
        setList([...newList]);
    }


    return (
        <>
        {list.map((singleCurrency, index)=>{
            return (
                <>
                <Box className="currency-box">
                <Grid container>
                    <Grid item xs={11}>
                        {/* New currency */}
                        <div className="Calculated" style={{textAlign: 'left'}}>
                            {singleCurrency.newValue}
                            {/* Calculated amount */}
                            <span style={{float:'right'}}>{Data.map(post => {
                                return post.code === singleCurrency.newValue ? 10*realRate(post.rate) : realRate(0)
                            })}</span>
                        </div>
                        <div className="Currency-name">{singleCurrency.newValue} - {Data.map(post => {
                            return post.code === singleCurrency.newValue ? post.name : ''
                        })}</div>
                        <div className="Currency-name">1 USD = {singleCurrency.newValue} {Data.map(post => {
                            return post.code === singleCurrency.newValue ? realRate(post.rate) : realRate(0)
                        })}</div>
                    </Grid>

                    {/* Delete button */}
                    <Grid item xs={1} className="Line">
                        <div size="small" className={classes.margin} onClick={()=>deleteCurrency(index)}>(-)</div>
                    </Grid>
                </Grid>
            </Box>
            <br></br>
            </>
            )
        })}
        <form onSubmit={handleSubmit}>
            <Grid container className="option-form">
                <Grid item xs={9} style={{textAlign: 'left'}}>
                    {/* Dropdown menu */}
                    <select value={selectedCurrency} aria-label="curr-input" onChange={(e) => {
                        const selectedCurrency = e.target.value;
                        setInput(selectedCurrency);
                    }}>
                        <option className="Currency-opt" value="" selected disabled>(+) Add more currencies</option>
                        {Data.map(post => {
                            return(
                            <option className="Currency-opt" value={post.code} key={post}>{post.code}</option>
                            )
                        })}
                    </select>
                </Grid>
                {/* Submit button */}
                <Grid item xs={3}>
                    <div className="submit-button" onClick={AddCurrency}>Submit</div>
                </Grid>
            </Grid>
        </form>
        <br></br> 
        </>
      );
}

export default AddButton;