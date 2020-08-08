import React from 'react'

import { FormControlLabel, Switch, Button } from '@material-ui/core'
import Card from './Card'
import CustomProfiler from './CustomProfiler'

import data from './fake-data'

const App = () => {
  return (
    <CustomProfiler id="main" showBaseDuration>
      <div style={styles.container}>
        <Controls />
        <Cards />
      </div>
    </CustomProfiler>
  )
}

const Controls = () => {
  return (
    <div style={styles.controlsContainer}>
      <FormControlLabel
        control={
          <Switch
            onChange={() => {
              /* TODO: add reversing logic */
            }}
            value="reverse"
            color="primary"
            inputProps={{ 'aria-label': 'reverse switch' }}
          />
        }
        label="Reverse"
      />

      <Button
        variant="contained"
        color="default"
        onClick={() => {
          /* TODO: add new item logic */
        }}
      >
        Add Item
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          /* TODO: add reset state logic */
        }}
        style={styles.resetButton}
      >
        Reset Preferences
      </Button>
    </div>
  )
}

const Cards = () => {
  return (
    <div style={styles.cardContainer}>
      {data.map(d => (
        <Card key={d.id} {...d} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    margin: '1rem',
  },
  controlsContainer: {
    marginLeft: '1rem',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  resetButton: {
    marginLeft: '1rem',
  },
}

export default App
