
import './App.css';
import LayOut from './layout/LayOut';
import { CssBaseline, Typography, Container, Button, Box } from '@material-ui/core'





function App() {

  return (
    <>
      <CssBaseline />
      <LayOut>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Todo list
            </Typography>
            <Box textAlign='center'>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Box>

            

          </Container>
        </div>

      </LayOut>
    

    </>
  );
}

export default App;
