// src/components/ProductsGrid.tsx
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ProductCard } from "../entities/product/ui/ProductCard";
import type { Product } from '../types';

// 📦 Компонент сетки продуктов
// Используется для отображения списка продуктов в виде сетки,
// Принимает массив продуктов и отображает их в виде карточек
// Оптимизирован для мобильных устройств и поддерживает адаптивный дизайн
interface ProductsGridProps {
    products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            {/*<Grid container spacing={2}>*/}
            {/*    {products.map((product) => (*/}
            {/*       // ИСПРАВЛЕНО: Свойство 'item' удалено, так как оно не используется в MUI v5*/}
            {/*       <Grid xs={12} sm={6} md={4} key={product.id}>*/}
            {/*            <ProductCard product={product} />*/}
            {/*        </Grid>*/}
            {/*    ))}*/}
            {/*</Grid>*/}
        </Box>
    );
};