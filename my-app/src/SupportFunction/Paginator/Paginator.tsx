import { Button } from 'antd'
import React, { useState } from 'react'
import s from './Paginator.module.css'


type PaginatorType = {
   totalCount: number
   PortionOfNumber: number
   ChangeCurrentPage: (p: number) => void
   CurrentPage: number
   PageSize: number
}


let Paginator: React.FC<PaginatorType> = ({ totalCount, PortionOfNumber, ChangeCurrentPage, CurrentPage, PageSize }) => {
   let mas: Array<number> = [];
   const TotalPage: number = Math.ceil(totalCount / PageSize)

   for (let i = 1; i <= TotalPage; i++) {
      mas.push(i)
   }


   let [firstPage, changeFirstPage] = useState(1);

   let LeftBorder = 1 + (firstPage - 1) * PortionOfNumber
   let RightBorder = firstPage * PortionOfNumber

   let LeftBorderClick = () => {
      changeFirstPage(firstPage - 1);
      ChangeCurrentPage(LeftBorder - 5)
   }
   let RightBorderClick = () => {
      changeFirstPage(firstPage + 1);
      ChangeCurrentPage(LeftBorder + 5)
   }
   return (
      <div className={s.AllPaginator}>
         {LeftBorder !== 1 && <Button type="primary" size='small' onClick={() => { firstPage > 1 && LeftBorderClick() }}>Prev</Button>}
         {
            mas.filter(p => p >= LeftBorder && p <= RightBorder)
               .map(p => {
                  return <span key={p}
                     className={(CurrentPage === p ? s.active : undefined) + ' ' + s.Paginator}
                     onClick={() => { ChangeCurrentPage(p) }}> {p}</span>
               })
         }
         {RightBorder < TotalPage && <Button type="primary" size='small' onClick={() => RightBorderClick()}>Next</Button>}
      </div >)
}
export default Paginator