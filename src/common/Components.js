import React, {useState} from 'react';
import "../css/common.css";
import "../css/menu.css";
import {
	ThemeProvider,
	createMuiTheme,
	makeStyles
  } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Icomoon from "../libraries/Icomoon";
import LeftMenu from '../common/menus/LeftMenu';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import { Select, FormControl, TextField } from "@material-ui/core";
import "date-fns";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from 'react-bootstrap/Tooltip'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Spinner from "react-bootstrap/Spinner";
import { Route, Redirect, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	margin: {
	  margin: theme.spacing(1),
	},
	small: {
		width: 25,
		height: 25,
	  },
	}));
	const theme = createMuiTheme({
		palette: {
		primary: orange,
		},
	});

// Render layout
export const Layout = (props) => {
    let {back, current, pageTitle} = props;
    return <LeftMenu children={props.children}  />;
};


// Render breadcrumb 
export const BreadCrumb = props => {
	let {back, current} = props;
	return (
		<div className="col-md-12 row">
			<Icomoon icon="arrow" size={20} className="align-self-center mb-3" onClick={()=> this.props.history.goBack()}/>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><a className="text-secondary" href="#" >{back}</a></li>
					<li className="breadcrumb-item active" aria-current="page">{current}</li>
				</ol>
			</nav>
		</div>
	)
}



// Render custom button
export const CustomButton  = props => {
    let {label, buttonFontColor, ...rest } = props;
    return (
        <button className="btn loginBgColor py-3 megaText font-weight-bold col-md-12" {...rest}>
            {label}
        </button>
    );
};





// Render Theme button
export const ThemeButton = props => {
    let {
		className = "btn", 
        wrapperClass,
        fieldClass,
        label,
        ...rest
    } = props;
    wrapperClass = wrapperClass ? wrapperClass : "";
    fieldClass = fieldClass ? fieldClass : "";
    if (props.className) {
        className = "py-1 btn" + wrapperClass;
    }
    if (props.loading) {
        return (
            <button
                className={wrapperClass}
                type="button"
                disabled
				{...rest}
            >
                <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                ></span>
				<span className="smallText">Loading</span>
            </button>
        );
    } else {
        return (
            <button
                type="submit"
                className={wrapperClass}
				{...rest}
            >
                {label}
            </button>
        );
    }
}


// Render custom input 

export const CustomInput  = props => {
  const classes = useStyles();
	let {placeholder, id, fieldStyle, customError, rightIcon, inputColor, iconName, iconSize, iconColor,  ...rest } = props;
        return (	
			<ThemeProvider theme={theme}>
				<TextField 
					className={+classes.margin, "col-md-12 fontStyle"}  
					id={id} 
					label={placeholder} 
					variant={fieldStyle} 
					color={inputColor} 
					endAdornment={rightIcon}
					{...rest}
					InputProps={{
						endAdornment: <Icomoon icon={iconName} size={iconSize} color={iconColor}/>
						}}
				/>  
				{customError ? (
                <small className="smallText text-danger">
                    {customError}
                </small>
            ) : null}
			</ThemeProvider>  
			
        );
    };

export const CustomSelect = props => {
    const classes = useStyles();
	let {placeholder, wapperClass, id,  fieldClass, customError,options,  ...rest } = props;
	wapperClass = wapperClass ? wapperClass : "";
	fieldClass = fieldClass ? fieldClass : "";
	const fillData = () => {
		var rows = [];
		rows.push(<option aria-label="None" value="" />);
		if (options) {
			for (const [index, value] of options.entries()) {
				rows.push(<option key={index}>{value.label}</option>);
			}
			return <>{rows}</>;
		} else {
			return null;
		}
	};
	return (
		<FormControl className="w-100">
            <ThemeProvider theme={theme}>
			    <InputLabel id="demo-simple-select-readonly-label normalText">{placeholder}</InputLabel>
                <Select native >{fillData()}</Select>
                {customError ? (
                    <small className="smallText text-danger">
                        {customError}
                    </small>
                ) : null}
            </ThemeProvider>
      	</FormControl>
	)
}

// Render custom date picker

export const CustomDatePicker = (props) => {
    let {
        wrapperClass,
        fieldClass,
        customError,
        placeholder,
        id,
        onChange,
        value,
        ...rest
    } = props;
    wrapperClass = wrapperClass ? wrapperClass : "";
    fieldClass = fieldClass ? fieldClass : "";

    return (
        <div className={ wrapperClass }>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                    <KeyboardDatePicker
                        id={id}
                        label={placeholder}
                        format="dd/MM/yyyy"
                        value={value}
                        onChange={(val) => {
                            onChange(val);
                        }}
                        InputLabelProps={{
                            shrink: value ? true : false,
                        }}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                            shrink: true,
                        }}
                        className="w-100"
                        {...rest}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            {customError ? (
                <small className="smallText text-danger">
                    {customError}
                </small>
            ) : null}
        </div>
    );
};
// Render custom ToolTip

export const ToolTip = (props) => {
    let { title, ...rest} = props;

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<div className="text-dark smallText bg-white rounded borderStyle borderStyle">{title}</div>}
            {...rest}
        />   
    )
}

// Prograss bar function

export function ProgressBar() {
	const [progress, setProgress] = React.useState(0);
  
	React.useEffect(() => {
	  const timer = setInterval(() => {
		setProgress((oldProgress) => {
		  if (oldProgress === 100) {
			return 0;
		  }
		  const diff = Math.random() * 10;
		  return Math.min(oldProgress + diff, 100);
		});
	  }, 500);
  
	  return () => {
		clearInterval(timer);
	  };
	}, []);
  
	return (
	  <div className="col-md-12">
		<LinearProgress variant="determinate" 
            value={progress}  
            size={40}
            thickness={4}
            className="themeActiveColor"
        />
	  </div>
	);
  }

  /**
 *
 * @param{props} route elements
 * @returns page route
 */
export const PublicRoute = props => {
    const [status, setStatus] = useState(false);
    const [allow, setAllow] = useState(false);
    const currentPath = useLocation();
    const routes = ["/", "/login"];
    if ( routes.includes(currentPath.pathname)) {
        return <Redirect to="/dashboard" />;
    }
    // function UseEffectDidMount() {
    //     useEffect(() => {
    //         if (!Config.reHydrate && !AppConfig.api_key && !status) {
    //             setStatus(true);
    //             init().then((response) => {
    //                 if (response && response.status) {
    //                     setStatus(false);
    //                     setAllow(true);
    //                 }
    //             });
    //         } else if (AppConfig.api_key) {
    //             setAllow(true);
    //         }
    //     }, []);
    //     return null;
    // }
    function pageLoader() {
        if (status) {
            return (
                <Modal id="routeLoader" show={status}>
                    <Spinner animation="border" variant="success" role="status">
                        <span className="sr-only">Loading</span>
                    </Spinner>
                </Modal>
            );
        } else {
            return null;
        }
    }
    return (
        <>
            {/* <UseEffectDidMount /> */}
            {allow ? <Route {...props} /> : null}
            {pageLoader()}
        </>
    );
}

/**
 *
 * @param {*} route elements
 * @returns square page route
 */
export const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route
            {...props}
            render={(props) =>
                // AppConfig.authorization !== "" ? (
                //     <Component {...props} />
                // ) : (
                    <Redirect to="/login" />
                // )
            }
        />
    );
};

export const CustomSwitch = (props) => {
    let {
        wrapperClass,
        label,
        ...rest
    } = props;

    return (
        <FormControlLabel
           {...rest}
            control={<Switch color= "warning" />}
            label={label}
            labelPlacement="start"
            // className={ wrapperClass }
        />
    )
}



  







