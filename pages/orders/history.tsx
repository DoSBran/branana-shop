import { ShopLayout } from '@/components/layouts'
import { Description } from '@mui/icons-material'
import { Button, Chip, Grid, Typography, Link } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import NextLink from 'next/link'
import React from 'react'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100},
    { field: 'fullName', headerName: 'Nombre completo', width: 100},

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'informacion de pago',
        width: 200,
        renderCell: (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
            return (params.row.paid
                ? <Chip color='success' label='Pagada' variant='outlined'/>
                : <Chip color='error' label='No pagada' variant='outlined'/>)
            
        }
    },
    {
        field: 'order',
        headerName:'Orden',
        description:'Ir a la orden',
        width: 200,
        sortable: false,
        renderCell:(params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
            return(
                <NextLink href={`/orders/${params.id}`} passHref legacyBehavior>
                    <Link>
                    <Button variant='outlined'>Ir a la orden</Button>
                    </Link>
                
                </NextLink>
            )
        }

    }
]

const rows = [
    {id:1, paid:true, fullName: 'Brandon cavichioni'},
    {id:2, paid:false, fullName: 'Brandon cavichioni'},
    {id:3, paid:true, fullName: 'Brandon cavichioni'},
    {id:4, paid:false, fullName: 'Brandon cavichioni'}

]
const history = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'} >
        <Typography variant='h1' component='h1'></Typography>
        <Grid container>
            <Grid item xs={12} sx={{heigth: 650, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[10]}
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default history