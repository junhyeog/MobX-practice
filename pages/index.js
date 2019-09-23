import React, { Fragment } from 'react';
import GetMarkList from '../components/GetMarkList.js'
import AddMarkForm from '../components/AddMarkForm.js'
const Index = () => (
    <Fragment>
      <div className="gray-background">
        <h2> Google-Marking-Map </h2>
      </div>
      <AddMarkForm />
      <GetMarkList />
    </Fragment>
  );
  
  export default Index;
