import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import BrandLogo from './BrandLogo'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Form } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

import { employeesData } from '../../data';



function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isUserShown, setIsUserShown] = useState(false);
    const [isDataShown, setIsDataShown] = useState(false);

  const handleuserClick = event => {
    // 👇️ toggle shown state
    
    setIsUserShown(!isUserShown);
     setIsDataShown(false);
  };

  const handledataClick = event => {
    // 👇️ toggle shown state
    
    setIsDataShown(!isDataShown);
    setIsUserShown(false);
    
  };

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        
        

        <div className='container'>
<BrandLogo/>

<ButtonGroup style={{ marginLeft:'40%',marginBottom:'5%', borderRadius:'50%'}} className='menubutton'
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
>
  <Button style={{  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px'}} onClick={handledataClick}>Showall All Resources</Button>
  <Button style={{  borderTopRightRadius: '50px',
  borderBottomRightRadius: '50px'}} onClick={handleuserClick}>Show All User</Button>
</ButtonGroup>




            {/* List */}
            {isDataShown &&!isAdding && !isEditing && (
                <>
                <Form className="d-flex" style={{ margin:'30px', width:'50%',height:'10%',alignContent:'right',}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button><SearchIcon color="secondary"/></Button>
          </Form>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                 
                </>
            )}
           

{/* 👇️ show elements on click */}
                {isUserShown && !isAdding && !isEditing && (
                     <>
                     <Form className="d-flex" style={{ margin:'30px', width:'50%',height:'10%',alignContent:'right',}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><SearchIcon/></Button>
          </Form> <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    /></>
 
  
)}

{/* 👇️ show component on click */}



            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;