import fitz
import os

def compress_pdf(input_path, output_path):
    print(f'Compressing {input_path}...')
    doc = fitz.open(input_path)
    doc.save(output_path, garbage=4, deflate=True, clean=True)
    doc.close()
    old_size = os.path.getsize(input_path)
    new_size = os.path.getsize(output_path)
    print(f'Done. Old: {old_size/(1024*1024):.2f}MB, New: {new_size/(1024*1024):.2f}MB')

compress_pdf('brochure.pdf', 'brochure_compressed.pdf')
compress_pdf('project/Nero.pdf', 'project/Nero_compressed.pdf')
