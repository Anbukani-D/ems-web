import React,{useRef,useState} from 'react';
import "../css/common.css";
import "../css/menu.css";
import {
	ThemeProvider,
	createMuiTheme,
	makeStyles
  } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Icomoon from "../libraries/Icomoon";
// import LeftMenu from '../common/menus/LeftMenu';
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
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LeftMenu from './sidebar/LeftMenu';
import ApplyLeave from '../pages/general/ApplyLeave';
import Overlay from "react-bootstrap/Overlay";
import Fab from '@material-ui/core/Fab';
import Alert from 'react-bootstrap/Alert';

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
    return (
       <LeftMenu children={props.children} back={props.back} current={props.current} pageTitle={props.pageTitle} /> );
};

// Render Theme button
export const ThemeButton = props => {
    let {
		className , 
        wrapperClass,
        fieldClass,
        label,
        loading,
        ...rest
    } = props;
    wrapperClass = wrapperClass ? wrapperClass : "";
    fieldClass = fieldClass ? fieldClass : "";
    if (props.className) {
        className = "py-1 btn" + wrapperClass;
    }
    if (props.loading) {
        return (
            <>
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
            </>
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
	let {placeholder, id, fieldStyle, customError, rightIcon, inputColor, iconName, iconSize, iconColor, error,  ...rest } = props;
        return (	
			<ThemeProvider theme={theme}>
				<TextField 
					className={classes.margin + " col-md-12 fontStyle"}  
					id={id} 
					label={placeholder} 
					variant={fieldStyle} 
					color={inputColor} 
					endAdornment={rightIcon}
                    error={error ? customError: placeholder }
					{...rest}
					InputProps={{
						endAdornment: <Icomoon icon={iconName} size={iconSize} color={iconColor}/>
						}}
				/>  
				{/* {customError ? (
                <small className="smallText text-danger">
                    {customError}
                </small>
            ) : null} */}
			</ThemeProvider>  
			
        );
    };
    
// Render custom select

// export const CustomSelect = props => {
// 	let {placeholder, customError, options, error,id, ...rest} = props;
	
// 	const fillData = () => {
// 		var rows = [];
// 		rows.push(<option aria-label="None" value="" />);
// 		if (options) {
// 			for (const [index, value] of options.entries()) {
// 				rows.push(<option key={index}>{value.label}</option>);
// 			}
// 			return <>{rows}</>;
// 		} else {
// 			return null;
// 		}
// 	};
// 	return (
// 		<FormControl className="w-100">
//             <ThemeProvider theme={theme}>
// 			    <InputLabel id="demo-simple-select-readonly-label normalText">{placeholder}</InputLabel>
//                     <Select native  
//                         {...rest}
//                         inputProps={{
//                             id: 'name-native-error',
//                         }}

//                         // error={error ? customError: placeholder }
//                         >{fillData()}
//                     </Select>
//             </ThemeProvider>
//       	</FormControl>
// 	)
// }
export const CustomSelect = (props) => {
    let { wapperClass, fieldClass, error, placeholder, id, options, fieldStyle, ...rest } = props;
    wapperClass = wapperClass ? wapperClass : "";
    fieldClass = fieldClass ? fieldClass : "";
    const fillData = () => {
        var rows = [];
        rows.push(<option aria-label="None"  value="" />);
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
        <>
            <FormControl  className={wapperClass + "w-100"}  variant={fieldStyle}>
                <InputLabel  htmlFor={id ? id : null}>{placeholder}</InputLabel>
                <Select 
                    native 
                    {...rest}
                    inputProps={{
                        id: 'name-native-error',
                    }}
                    >{fillData()}</Select>
            </FormControl>
            
            {error ? (
                <small className="form-text xSmallText text-danger">
                    {error}
                </small>
            ) : null}
            {/*error={error ? customError: placeholder }*/}
        </>
    );
  };
// Render custom date picker

export const CustomDatePicker = (props) => {
    let {
        error,
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
                        error={error ? customError: placeholder }
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            {/* {customError ? (
                <small className="smallText text-danger">
                    {customError}
                </small>
            ) : null} */}
        </div>
    );
};
// Render custom ToolTip

export const ToolTip = (props) => {
    let { title, direction, ...rest} = props;

    return (
        <OverlayTrigger
            placement={direction}
            delay={{ show: 250, hide: 400 }}
            arrow
            overlay={<span className="text-dark  smallText border borderColor p-1 mt-1 px-3 rounded">{title}</span>}
            {...rest}
        />   
    )
}

export const CustomSwitch = (props) => {
    let {
        wrapperClass,
        label,
        ...rest
    } = props;

    return (
        <FormControlLabel
           {...rest}
            control={<Switch/>}
            label={label}
            labelPlacement="start"
        />
    )
}

// export const CustomToastMessage = (props) =>{
//     let {content} = props;
//     const [show, setShow] = useState(false);
  
//     return (
//       <Row>
//         <Col xs={6}>
//           <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            
//             <Toast.Body>{content}</Toast.Body>
//           </Toast>
//         </Col>
//         <Col xs={6}>
//           <ThemeButton onClick={() => setShow(true)} label="Submit"/>
//         </Col>
//       </Row>
//     );
//   }

/*-------------------------
Apply leave function
---------------------------*/
export default function ApplyLeaveButton() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    
    return (
        <>
            <div ref={ref}> 
                <>
                    <ToolTip direction="top" title="Apply Leave"> 
                        <Fab>
                            <Icomoon style={{cursor:'pointer'}} icon="floatBtn" size={50} onClick={handleClick}/>
                        </Fab>
                    </ToolTip>
                </>
                <Overlay
                    show={show}
                    target={target}
                    placement="top"
                    container={ref.current}
                    containerPadding={20}
                >
                    <Alert className="col-md-3 borderStyle  borderColor bg-white p-3" id="popover-contained">
                        <div className="d-flex justify-content-between">
                            <p className="smallText font-weight-bold">Apply Leave</p>
                            <Icomoon icon="cirBtn" size={50} style={{cursor:'pointer'}} onClick={handleClick} />
                        </div>
                        <ApplyLeave/>
                    </Alert>
                </Overlay>
            </div>
        </>
    );
}



  



  







