import React, { useState } from 'react';
import './App.css';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
function App() {
  var [value, setValue] = useState('');
  let [output, setOutput] = useState(0);
  const restrvalue = value.replace(/\s/g, '');
  function Cacul() {
    for (let i = 0; i < restrvalue.length; i++) {
      const newValue = restrvalue[i];
      if (newValue === '+') {
        let rnum = parseFloat(restrvalue.slice(0, i));
        let lnum = parseFloat(restrvalue.slice(i + 1, restrvalue.length));
        setOutput(rnum + lnum);
      } else if (newValue === '-') {
        let rnum = parseFloat(restrvalue.slice(0, i));
        let lnum = parseFloat(restrvalue.slice(i + 1, restrvalue.length));
        setOutput(rnum - lnum);
      } else if (newValue === 'x') {
        let rnum = parseFloat(restrvalue.slice(0, i));
        let lnum = parseFloat(restrvalue.slice(i + 1, restrvalue.length));
        setOutput(rnum * lnum);
      } else if (newValue === '/') {
        let rnum = parseFloat(restrvalue.slice(0, i));
        let lnum = parseFloat(restrvalue.slice(i + 1, restrvalue.length));
        setOutput(rnum / lnum);
      } else {
        console.log('Iput should include operand');
      }
    }
  }

  return (
    <div className="App">
      <Box sx={{ mt: '6vh' }}>
        <Container
          maxWidth="xs"
          sx={{
            mt: '2vh',
            boxShadow: '0px 0.5px 1px 1px #c6c6c6',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mt: 2, mb: 3 }}>
              Calculate
            </Typography>
            <TextField
              id="outlined-basic"
              label="Input:"
              variant="outlined"
              sx={{ mb: 2 }}
              size="small"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <Typography variant="h5" sx={{ mt: 2, mb: 3 }}>
              Output:{` ${output}`}
            </Typography>
            <Button
              variant="contained"
              onClick={Cacul}
              color="success"
              sx={{ mb: 3, mt: 3 }}
            >
              Execute
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default App;
