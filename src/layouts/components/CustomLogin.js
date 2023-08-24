import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";
import Divider from "@mui/material/Divider";

function LoginTabContent() {
  return 123;
}

function SignupTabContent() {
  return 456;
}

const LoginDialog = ({open, onClose})=>{
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth={'xs'}
    >
      <Tabs value={activeTab} onChange={handleTabChange} sx={{display:'flex', justifyContent:'space-evenly'}}>
        <Tab label="Log In"/>
        <Tab label="Sign Up"/>
      </Tabs>
      <Divider sx={{ backgroundColor: theme => theme.palette.primary.main }} />

      <DialogContent>
        {activeTab === 0 && <LoginTabContent/>} {/* Render Login content when activeTab is 0 */}
        {activeTab === 1 && <SignupTabContent/>} {/* Render Signup content when activeTab is 1 */}
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog
