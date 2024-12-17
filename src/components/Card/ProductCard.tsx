import {CardContent, CardMedia, Box, Tooltip} from '@mui/material';
import { ProductCardCategory, ProductCardDescription, ProductCardQuantity, ProductCardTitle, ProductCardWrapper, ProductCardImageAltText } from './style';
export interface ProductCardProps {
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    image?: string | null;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, description, category, quantity, unit, image }) => {
    return (
        <Tooltip title={
            <div>
                {description.length > 100 ? `${description.slice(0, 300)}...` : description}
            </div>
        }>

        <ProductCardWrapper>

            
        <Box>
            {image ? (
            <CardMedia component="img" height="140" image={image} alt={name} style={{objectFit: "contain"}}/>
            ) : (
            <ProductCardImageAltText align="center">
                Нет изображения
            </ProductCardImageAltText>
            )}
        </Box>
        <CardContent>
            <ProductCardTitle>{name}</ProductCardTitle>

            <ProductCardDescription noWrap>
                {description.length > 100 ? `${description.slice(0, 100)}...` : description}
            </ProductCardDescription>

            <ProductCardCategory>Категория: {category}</ProductCardCategory>

            <ProductCardQuantity>
            Количество: {quantity} {unit}
            </ProductCardQuantity>
        </CardContent>
        </ProductCardWrapper>
        </Tooltip>
    );
    };

export default ProductCard;
