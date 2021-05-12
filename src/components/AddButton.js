import React, { useState } from 'react';
import './AddButton.css';
import Data from "../data.json"
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const CurrencyBox = styled(Box)({
    borderWidth: '1px',
    borderRadius: 3,
    borderStyle: 'solid',
    color: 'black',
    borderColor: 'black',
    minHeight: '33px',
    maxWidth: '435px',
    margin: 'auto',
  });

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    fontSize: '20px',
    position: 'relative',
    top: '20%',
  },
  formControl: {
    margin: theme.spacing(1),
    padding: '0px',
  },
}));

function AddButton ({props, selectedCurrency}) {
    const classes = useStyles();
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    let finalAmount;
    const realRate = (rate) => {
        if(rate!==0){
            let rateConvert;
            rateConvert = 0 + rate;
            finalAmount = rateConvert;
            return rateConvert.toFixed(4);
        }
        
    }

    const AddCurrency = (event) => {
        event.preventDefault();
        const newList = list;
        newList.push({newValue: input});
        setList([...newList]);
    }

    const handleSubmit = (e) => {
        console.log('Submitted!');
        props.onSubmit({
            text: list
        })
        setInput('');
    };


    return (
        <>
        {list.map((singleCurrency)=>{
            return (
                <>
                <CurrencyBox>
                <Grid container>
                    <Grid item xs={10}>
                        <div className="Calculated" style={{textAlign: 'left'}}>
                            {singleCurrency.newValue}
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
                    <Grid item xs={2} className="Line">
                        <Button size="small" className={classes.margin}>(-)</Button>
                    </Grid>
                </Grid>
            </CurrencyBox>
            <br></br>
            </>
            )
        })}
        <form onSubmit={handleSubmit}>
            <CurrencyBox >
            <Grid container>
                    <Grid item xs={9} style={{textAlign: 'left'}}>
                        <select value={selectedCurrency} onChange={(e) => {
                            const selectedCurrency = e.target.value;
                            setInput(selectedCurrency);
                        }}>
                            <option className="Currency-opt">(+) Add more currencies</option>
                            {Data.map(post => {
                                return(
                                <option className="Currency-opt" value={post.code} key={post}>{post.code}</option>
                                )
                            })}
                        </select>
                    </Grid>
                    <Grid item xs={3} className="Line">
                        <div className={classes.margin} onClick={AddCurrency}>Submit</div>
                    </Grid>
            </Grid>
        </CurrencyBox>
        </form>
        <br></br> 
        </>
      );
}

export default AddButton;