import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions/userActions';

import Filter from './components/Filter';
import Pagination from './components/Pagination';
import TeamCreator from './components/TeamCreator';
import TeamDetails from './components/TeamDetails';
import UserCard from './components/UserCard';
import './App.css'

function App() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState([]);

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.items);
  console.log("usercards",users)
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const applyFilters = user => {
    const domainMatch = domainFilter.length === 0 || domainFilter.includes(user.domain);
    const genderMatch = genderFilter.length === 0 || genderFilter.includes(user.gender);
    const availabilityMatch = availabilityFilter.length === 0 || availabilityFilter.includes(user.available.toString());
    return domainMatch && genderMatch && availabilityMatch;
  };
  var filteredUsers = users.filter(user =>
    `${user.first_name}${user.last_name}`.toLowerCase().includes(searchTerm) || `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm)
  );
   filteredUsers = filteredUsers.filter(user => applyFilters(user));
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleSearchChange}
        value={searchTerm}
      />
      <div className='childgrid'>
      <div>
      <Filter
        title="Domain"
        options={['Sales', 'Engineering', 'HR', 'Marketing']} // Replace with actual domains
        selectedOptions={domainFilter}
        onFilterChange={setDomainFilter}
      />
      <Filter
        title="Gender"
        options={['Male', 'Female', 'Other']} // Adjust as needed
        selectedOptions={genderFilter}
        onFilterChange={setGenderFilter}
      />
      <Filter
        title="Availability"
        options={['true', 'false']} // Availability options
        selectedOptions={availabilityFilter}
        onFilterChange={selected => setAvailabilityFilter(selected)}
      />
      </div>
      <div className="user-grid">
        {currentUsers.map(user => <UserCard key={user.id} user={user} />)}
      </div>
      </div>
      {
        filteredUsers.length>0 ? <Pagination 
        usersPerPage={usersPerPage} 
        totalUsers={filteredUsers.length} 
        paginate={paginate} 
        currentPage={currentPage}
      /> : (<h1>No User Found</h1>
        )
      }
      <TeamCreator />
      <TeamDetails />
    </div>
  );
}

export default App;
