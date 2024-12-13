import react from 'react';
import {Card, CardContent, Typography, CardMedia, Box} from '@mui/material';

interface ProductCardProps {
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    image?: string | null;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, description, category, quantity, unit, image }) => {
    return (
        <Card style={{ width: 300, margin: '10px', display: 'flex', flexDirection: 'column' }}>
        <Box>
            {image ? (
            <CardMedia component="img" height="140" image={image} alt={name} />
            ) : (
            <Typography align="center" style={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0' }}>
                Нет изображения
            </Typography>
            )}
        </Box>
        <CardContent>
            <Typography variant="h6" fontWeight="bold">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
            {description.length > 100 ? `${description.slice(0, 100)}...` : description}
            </Typography>
            <Typography variant="body2">Категория: {category}</Typography>
            <Typography variant="body2">
            Количество: {quantity} {unit}
            </Typography>
        </CardContent>
        </Card>
    );
    };

export default ProductCard;