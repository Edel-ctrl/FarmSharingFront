// 📁 src/types/offer.ts
export interface Offer {
    // ✅ Существующие поля
    id: number;           // 🆔 ID товара
    title: string;        // 📝 Название
    description: string;  // 📄 Описание
    price: number;        // 💰 Цена

    // 🆕 НОВЫЕ поля с Backend
    category: string;     // 🏷️ Категория (овощи/фрукты/молочка// 📦 Количество в наличии
    farm: {              // 🚜 Информация о ферме
        id: number;
        name: string;
        location: string;
    };

    // 🖼️ Оставляем картинку (пока что)
    imageUrl?: string;    // 📸 URL картинки товара
}
