
export const showAdForm = (ad) => {
  let adTypeRadio;
  if (ad.adType === "Sale") {
    adTypeRadio = `
    <div class="radio">
      <div class="radio__sale">
        <label for="sale">Sale</label>
        <input type="radio" name="ad-type" id="sale" value="Sale" checked />
      </div>
      <div class="radio__buy">
        <label for="buy">Buy</label>
        <input type="radio" name="ad-type" id="buy" value="Buy" />
      </div>
    </div>
    `
  } else {
    adTypeRadio = `
    <div class="radio">
      <div class="radio__sale">
        <label for="sale">Sale</label>
        <input type="radio" name="ad-type" id="sale" value="Sale" />
      </div>
      <div class="radio__buy">
        <label for="buy">Buy</label>
        <input type="radio" name="ad-type" id="buy" value="Buy" checked />
      </div>
    </div>
    `
  }

  let image = ad.imageUrl || '';

  return `  
  <div class="form-row">
    <label for="name">Item name:</label>
    <input type="text" name="name" id="name" value="${ad.name}" required />
  </div>
  <div class="form-row">
    <label for="description">Description:</label>
    <textarea name="description" id="description" cols="30" rows="6" required>${ad.description}</textarea>
  </div>
  <div class="form-row price">
    <div>
      <label for="price">Price:</label>
      <input type="number" name="price" step="0.01" size="6" id="price" min=0 value="${ad.price}" required />
    </div>
  ${adTypeRadio}
  </div>
  <div class="form-row">
    <label for="imageUrl">Image</label>
    <input type="text" id="imageUrl" name="imageUrl" value="${image}" >
  </div>
  <div class="form-row">
    <button type="submit">Update Ad</button>
    <button type="reset">Clear form</button>
  </div>        
  `
}