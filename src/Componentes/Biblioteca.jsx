import React, {useState, useEffect} from "react";
import { Label, Container, List, Grid, Divider} from 'semantic-ui-react';

function Biblioteca(props){
    const [ mensaje, setMensaje ] = useState('');
    const BibliotecaPersonal = [];

    if (BibliotecaPersonal=== null){
        setMensaje('Su Biblioteca esta vacia');
    }

    return(
        <Container>
            <Grid>
                <Grid.Row>
                    <Label>Biblioteca</Label>
                </Grid.Row>
                <Divider hidden/>
                <Grid.Row>
                    <List>

                    </List>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Biblioteca; 