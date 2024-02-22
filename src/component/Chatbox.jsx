import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper, Avatar, IconButton, Typography } from '@mui/material';
import { Delete, AccessTime, CheckCircle } from '@mui/icons-material';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = () => {
    if (input.trim() === '') return;
    // User message
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Bot message (asking a question)
    setTimeout(() => {
      setMessages([...messages, { text: `Bot: What is your favorite color?`, sender: 'bot' }]);
    }, 500);
  };

  // Function to handle bot's response to user's answer
  const handleBotResponse = (userAnswer) => {
    // Bot's response based on user's answer
    let botResponse;
    if (userAnswer.toLowerCase().includes('blue')) {
      botResponse = "Bot: Blue is a nice color!";
    } else {
      botResponse = "Bot: Interesting choice!";
    }

    // Add bot's response to messages
    setTimeout(() => {
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  return (
    <Container maxWidth="sm"  >
      <Grid container justifyContent="center" alignItems="center" spacing={6} style={{ margin: '-9px -63px',  }}>
        <Grid item style={{padding:"10% auto"}}>
          <IconButton>
            <CheckCircle />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ fontWeight: "bolder" }}>Interact with your <br /> recommendation on the left!</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <AccessTime />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Delete style={{ color: "red" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Paper elevation={5} style={{ backgroundColor: "#c6c6e9", margin: '20px auto', height: '410px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            {msg.sender !== 'user' && (
              <Avatar alt={msg.sender} src="vite.svg" style={{ marginRight: '8px' }} />
            )}
            <div style={{ backgroundColor: msg.sender === 'user' ? '#3f51b5' : '#f50057', color: 'white', padding: '8px 12px', borderRadius: '8px', marginBottom: '8px', maxWidth: '70%' }}>
              {msg.text}
            </div>
            {/* {msg.sender !== 'user' && (
              <Avatar alt={msg.sender} src="vite.svg" style={{ marginLeft: '8px' }} />
            )} */}
          </div>
        ))}
      </Paper>
      <Grid container spacing={5} marginTop={"10px"} alignItems="center">
        <Grid item xs={2}>
          <Avatar alt="User" src="vite.svg" />
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={2} marginLeft={'33px'}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={sendMessage}
          >
            Ask
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatBox;
