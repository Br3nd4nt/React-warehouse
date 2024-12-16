import React from 'react';
import { Box, Button, CardMedia, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

interface ProductCardModelProps {
    open: boolean;
    onClose: () => void;
    product: {
        name: string;
        description: string;
        category: string;
        quantity: number;
        unit: string;
        image?: string | null;
    } | null;
}

const ProductCardModal: React.FC<ProductCardModelProps> = ({open, onClose, product}) => {
    if (!product) return null;

    return (
        <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
            sx: {
                width: '60%',
                height: 'auto',
            }
        }}
        >
            <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
            <Box display="flex" gap={2}>
                {product.image? 
                (<CardMedia
                    component="img"
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'contain',
                    }}
                />) : (<Typography
                    variant='body1'
                    color='text.secondary'
                    style={{
                        width: '50%',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#f0f0f0',
                        height: 300,
                    }}
                > нет изображения</Typography>)}
                <Box>
                    <Typography variant="body1">
                        <strong>Описание: </strong> {product.description}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Категория: </strong> {product.category}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Количество: </strong> {product.quantity} {product.unit}
                    </Typography>
                </Box>
            </Box>
            <Button onClick={onClose} style={{marginTop: '20px'}}>
                Закрыть
            </Button>
        </DialogContent>
        </Dialog>
    );
};

export default ProductCardModal;