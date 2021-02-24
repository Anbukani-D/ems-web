import React from 'react';
import "../../../css/common.css";
import Summary from "./Summary";
import Team from "./Team";
import Document from "./Document";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// Tab function

const AntTabs = withStyles({
    root: {
      borderBottom: '6px solid #F69A6A4A',
    },
    indicator: {
      backgroundColor: '#DF5A14',
      borderBottom: '6px solid #DF5A14',
    },
  })(Tabs);
  
  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      '&$selected': {
        color: '#DF5A14',
      },
      
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);
  
  const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%'
      },
    },
  })((props) => <Tabs {...props}  />);
  
  
  export default function UserProfileTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div >
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="Summary" />
            <AntTab label="Team" />
            <AntTab label="Document" />
          </AntTabs>
          <Typography />
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
              <Summary/>
              <Team/>
              <Document/>
          </StyledTabs>
      </div>
    );
  }

  