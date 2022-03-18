import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { editingHeader } from '../actions'
import HeaderEditingForm from './HeaderEditingForm'

const Header = ({ header, dispatchEditingHeader }) => {
  const [editingStatus, setEditingStatus] = useState(false)
  const { image, description } = header

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div className="mb-3">
          <h1 style={{ fontWeight: 'bold' }}>React Redux Blog App</h1>
          <h6 className="text-muted">🌻Raymon Shi🌻</h6>
          <h3 className="text-muted">{description}</h3>
          <img src={image} alt="" style={{ height: '15%', width: '15%' }} />
        </div>
        <Button variant="warning" onClick={() => setEditingStatus(!editingStatus)}>Edit Header</Button>
      </div>
      {editingStatus ? <HeaderEditingForm image={image} description={description} setEditingStatus={setEditingStatus} dispatchEditingHeader={dispatchEditingHeader} /> : ''}
      <hr />
    </>
  )
}

const mapStateToProps = state => ({
  header: state.header,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditingHeader: (image, description) => dispatch(editingHeader(image, description)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
