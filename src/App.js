import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import QuestionCircleIcon from '@rsuite/icons/legacy/QuestionCircle';
import ProfileIcon from '@rsuite/icons/legacy/Profile';
import LineChartIcon from '@rsuite/icons/legacy/LineChart';
import logo from "./logo2.png";
import { useState } from 'react';
import "./App.css";

const styles = {
  width: 240,
  display: 'inline-table',
  marginRight: 10
};

const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  return (
    <div style={{ height:'100vh', ...styles}}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{height:'100%', overflow:'auto'}}
      >
        <Sidenav.Body>
          <div style={{textAlign:'center', margin:'10px 0'}}>
            <img src={logo} alt="Naturals Logo" style={{width:expanded ? '150px' : '40px'}} />
            {expanded && <div style={{marginTop:'10px', fontSize:'18px', fontWeight:'bold'}} >
               Naturals
               </div>}
          </div>
          <Nav {...navProps}>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
            <Nav.Item eventKey="5" icon={<LineChartIcon />}>
              User Group
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<QuestionCircleIcon />}>
              User Group
            </Nav.Item>
            <Nav.Item eventKey="7" icon={<ProfileIcon />}>
              User Group
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};

const App = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [openKeys, setOpenKeys] = useState(['3', '4']);
  const [expanded, setExpand] = useState(true);

  return (
    <>
     
      <CustomSidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance="inverse"
      />
     
    </>
  );
};

export default App;
