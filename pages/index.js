import React, { Fragment } from 'react';
import GetMarkList from '../components/GetMarkList'
import AddMarkForm from '../components/AddMarkForm'
import Counter from '../components/Counter'
const Index = () => (
    <Fragment>
      <div className="gray-background">
        <h2> Google-Marking-Map </h2>
      </div>
      <AddMarkForm />
      <GetMarkList />
      <Counter />
    </Fragment>
  );
  
  export default Index;
