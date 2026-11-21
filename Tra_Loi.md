# Trả lời câu hỏi bổ sung - Buổi 10: BookStore với React Navigation và Redux Toolkit

**1. Vì sao khi đổi numColumns của FlatList phải đổi cả key? Bỏ key thì chuyện gì xảy ra?**

FlatList không cho đổi numColumns khi đang chạy. Đổi key thì React huỷ FlatList cũ và dựng cái mới với số cột mới. Bỏ key thì bật Switch sẽ báo lỗi "Changing numColumns on the fly is not supported".

**2. Dữ liệu nào nên để trong useState của màn hình, dữ liệu nào nên đưa vào Redux? Lấy ví dụ từ BookStore (keyword, isTile, giỏ hàng, yêu thích).**

keyword, isTile, category chỉ màn Home dùng, nên để trong useState. Giỏ hàng và yêu thích được nhiều màn dùng (Detail, Cart, Favorites, badge trên tab), nên để trong Redux.

**3. Trong createSlice được viết state.items.push(…) và found.quantity += 1. Vì sao viết như vậy được, trong khi ở component bình thường không được sửa trực tiếp state?**

Trong createSlice, state thực chất là một bản nháp (draft) do Immer cung cấp. Immer ghi lại các thay đổi rồi tạo ra state mới bất biến, nên viết push hay += 1 vẫn an toàn. Ở component thường không có Immer, nên sửa trực tiếp state sẽ không báo cho React vẽ lại.

**4. selectIsFavorite(id) trả về một hàm. Vì sao viết như vậy? Danh sách yêu thích chỉ lưu id mà không lưu cả đối tượng sách thì có lợi gì?**

Hàm này cần cả state lẫn id, nhưng useSelector chỉ truyền vào state. Vì vậy ta bọc lại: nhận id trước, trả về hàm nhận state. Chỉ lưu id thì dữ liệu sách không bị nhân bản, nên không lệch khi thông tin sách đổi, và state nhỏ, dễ so sánh.

**5. BookCard dùng React.memo, còn onSelect ở Home được bọc bằng useCallback. Nếu bỏ useCallback thì React.memo còn tác dụng không? Giải thích.**

Bỏ useCallback thì mỗi lần Home render, onSelect là một hàm mới, nên React.memo thấy prop đổi và vẽ lại mọi thẻ. Khi đó React.memo gần như mất tác dụng.

**6. (Bonus) Một createAsyncThunk có ba hành động pending, fulfilled, rejected. Mỗi hành động làm thay đổi những trường nào của state trong booksSlice?**

Ba action của thunk:

- pending: status = "loading", error = null.
- fulfilled: status = "succeeded", items = payload.
- rejected: status = "failed", error = payload (hoặc "Không tải được dữ liệu").
