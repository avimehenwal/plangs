	.text
	.intel_syntax noprefix
	.file	"hello-world.c"
	.globl	main                            # -- Begin function main
	.p2align	4, 0x90
	.type	main,@function
main:                                   # @main
	.cfi_startproc
# %bb.0:
	push	rbp
	.cfi_def_cfa_offset 16
	.cfi_offset rbp, -16
	mov	rbp, rsp
	.cfi_def_cfa_register rbp
	sub	rsp, 16
	mov	dword ptr [rbp - 4], 0
	movabs	rdi, offset .L.str
	mov	al, 0
	call	printf
	xor	ecx, ecx
	mov	dword ptr [rbp - 8], eax        # 4-byte Spill
	mov	eax, ecx
	add	rsp, 16
	pop	rbp
	.cfi_def_cfa rsp, 8
	ret
.Lfunc_end0:
	.size	main, .Lfunc_end0-main
	.cfi_endproc
                                        # -- End function
	.type	.L.str,@object                  # @.str
	.section	.rodata.str1.1,"aMS",@progbits,1
.L.str:
	.asciz	"Hello, World!"
	.size	.L.str, 14

	.ident	"clang version 11.0.0 (Fedora 11.0.0-2.fc33)"
	.section	".note.GNU-stack","",@progbits
	.addrsig
	.addrsig_sym printf
