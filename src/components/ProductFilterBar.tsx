// src/components/ProductFilterBar.tsx
import {Box, TextField, Button, MenuItem} from '@mui/material';

// 📦 Компонент панели фильтров продуктов
// Используется для фильтрации продуктов по поисковому запросу и категории
interface ProductFilterBarProps {
    searchQuery: string;
    onSearch: (query: string) => void;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export const ProductFilterBar = ({
                                     searchQuery,
                                     onSearch,
                                     categories,
                                     selectedCategory,
                                     onCategoryChange
                                 }: ProductFilterBarProps) => {
    return (
        <Box sx={{display: 'flex', gap: 2, mb: 2}}>
            <TextField
                label="Search"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                sx={{flex: 1}}
            />
            <Button variant="contained">Search</Button>
            <TextField
                select
                label="Category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value as string)}
            >
                {categories && categories.length > 0 ? (
                    categories.map(category => (
                        <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))
                ) : (
                    <>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Fruits">Fruits</MenuItem>
                        <MenuItem value="Vegetables">Vegetables</MenuItem>
                        <MenuItem value="Diary">Diary</MenuItem>
                        <MenuItem value="Pantry">Pantry</MenuItem>
                        <MenuItem value="Verbs">Verbs</MenuItem>
                        <MenuItem value="Others">Other</MenuItem>
                    </>
                )}
            </TextField>
        </Box>
    );
};