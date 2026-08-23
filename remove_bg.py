from PIL import Image
import os

def remove_white_bg():
    input_path = 'public/assets/target-logo.jpg'
    output_path = 'public/assets/target-logo-transparent.png'
    
    if not os.path.exists(input_path):
        print("Input file not found!")
        return

    print("Opening image...")
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    
    width, height = img.size
    print(f"Image size: {width}x{height}")
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Calculate distance from pure white (255, 255, 255)
            dist = ((255 - r)**2 + (255 - g)**2 + (255 - b)**2)**0.5
            
            if dist < 30: # Pixels very close to white become fully transparent
                pixels[x, y] = (r, g, b, 0)
            elif dist < 120: # Edge smoothing: partially transparent
                # Map distance (30 -> 120) to alpha (0 -> 255)
                alpha = int((dist - 30) / 90 * 255)
                pixels[x, y] = (r, g, b, alpha)
                
    # Crop the image to its bounding box
    print("Cropping image to remove empty space...")
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        print(f"New image size after crop: {img.size[0]}x{img.size[1]}")
    
    img.save(output_path, "PNG")
    print(f"Saved transparent cropped image to {output_path}")

if __name__ == '__main__':
    remove_white_bg()
