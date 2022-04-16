import React from 'react'

export default function Header({onChangeSort, queryObj}) {

  const _onChangeSort = (ev) => {
    onChangeSort(ev.target.value)
  }
  return (
    <div className="row align-items-center mb-7">
        <div className="col-12 col-md">
        {/* Heading */}
        <h3 className="mb-1">Womens' Clothing</h3>
        {/* Breadcrumb */}
        <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
            <li className="breadcrumb-item">
            <a className="text-gray-400" href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">
            Women's Clothing
            </li>
        </ol>
        </div>
        <div className="col-12 col-md-auto">
        {/* Select */}
        <select onChange = {_onChangeSort} defaultValue={queryObj.sort} className="custom-select custom-select-xs">
            <option value="">--sap xep</option>
            <option value="real_price.desc">Gia thap dan</option>
            <option value="real_price.asc">Gia cao dan</option>
            <option value="rating_average.asc">Duoc danh gia cao</option>
        </select>
        </div>
    </div>
  )
}
